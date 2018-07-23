import app from "./App"
let PORT = 3000
if (process.argv.some(arg => arg === "--prod")) {
    PORT = 80
}

app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT)
})
