-- Contact form submissions.
--
-- Row Level Security is ENABLED with NO policies, which means neither the
-- public `anon` role nor authenticated users can read or write this table
-- through the API. Only the Edge Function, which uses the SERVICE ROLE key,
-- can insert rows (the service role bypasses RLS). This keeps every visitor's
-- name / email / message private.

create table if not exists public.contact_submissions (
  id          uuid        primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text        not null,
  email       text        not null,
  phone       text,
  usluga      text,
  paket       text,
  dodatci     text,
  poruka      text        not null
);

alter table public.contact_submissions enable row level security;

-- Helpful for browsing newest-first in the dashboard.
create index if not exists contact_submissions_created_at_idx
  on public.contact_submissions (created_at desc);
