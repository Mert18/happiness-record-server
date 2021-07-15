
CREATE TABLE users (
  user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL,
  user_password VARCHAR(255) NOT NULL
);

CREATE TABLE parameters (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  owner_id VARCHAR(255) not null references users(user_id),
  work INTEGER,
  leisure INTEGER,
  game INTEGER,
  happiness INTEGER,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);


