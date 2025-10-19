exports.up = (pgm) => {
  pgm.createTable("users", {
    id: {
      type: "uuid",
      primaryKey: true,
      default: pgm.func("gen_random_uuid()"),
    },

    // For reference, GitHub limits usernames to 39 characteres.
    username: {
      type: "varchar(30)",
      notNull: true,
      unique: true,
    },

    // Why 254 in legth? https://stackoverflow.com/a/1199238
    email: {
      type: "varchar(240)",
      notNull: true,
      unique: true,
    },

    // Why 72 in length? https://security.stackexchange.com/q/39849
    password: {
      type: "varchar(60)",
      notNull: true,
    },

    // Why timestamp with timezone? https://security.stackexchange.com/questions/39849/does-bcrypt-have-a-maximum-password-length
    created_at: {
      type: "timestamptz",
      notNull: true,
      default: pgm.func("timezone('utc', now())"),
    },

    updated_at: {
      type: "timestamptz",
      notNull: true,
      default: pgm.func("timezone('utc', now())"),
    },
  });
};

exports.down = false;
