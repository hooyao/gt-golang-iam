db.createUser(
    {
        user: "iam",
        pwd: "123",
        roles: [
            {
                role: "dbOwner",
                db: "iam_analytics"
            }
        ]
    }
);