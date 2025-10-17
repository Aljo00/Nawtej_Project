/*
  # Create Contact Messages Table

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key) - Unique identifier for each message
      - `name` (text) - Name of the person submitting the message
      - `email` (text) - Email address of the person
      - `subject` (text) - Subject line of the message
      - `message` (text) - The actual message content
      - `created_at` (timestamptz) - Timestamp when the message was submitted
  
  2. Security
    - Enable RLS on `contact_messages` table
    - Add policy for anonymous users to insert messages (for contact form)
    - Add policy for authenticated admin users to read all messages
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact messages"
  ON contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can read messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);
