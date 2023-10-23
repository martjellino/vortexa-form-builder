test("POST /project", async () => {
    const body = {
        name: "A new project",
        authorId: "abcdefghijklmnopqrstu"
    }
    const response = await request(POST).post("/project").send(body)

    expect
})