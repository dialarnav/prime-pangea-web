-- Fix 1: Implement role-based access control for contact submissions

-- Create app_role enum for role management
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

-- Create user_roles table to track user roles
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role public.app_role NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Policy: Users can view their own roles
CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Policy: Only admins can manage roles
CREATE POLICY "Admins can manage all roles"
ON public.user_roles
FOR ALL
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = auth.uid() AND role = 'admin'
  )
);

-- Create security definer function to check roles (prevents RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Drop the overly permissive policy
DROP POLICY IF EXISTS "Authenticated users can view all submissions" ON public.contact_submissions;

-- Create new admin-only policy for viewing submissions
CREATE POLICY "Only admins can view submissions"
ON public.contact_submissions
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Fix 2: Add input validation constraints to prevent data integrity issues

-- Add length constraints to prevent excessive data storage
ALTER TABLE public.contact_submissions
ADD CONSTRAINT name_length CHECK (length(name) <= 100),
ADD CONSTRAINT email_length CHECK (length(email) <= 255),
ADD CONSTRAINT phone_length CHECK (length(phone) <= 50),
ADD CONSTRAINT message_length CHECK (message IS NULL OR length(message) <= 2000),
ADD CONSTRAINT square_footage_length CHECK (square_footage IS NULL OR length(square_footage) <= 20);