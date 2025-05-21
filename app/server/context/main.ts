export async function CTX() {
    return {}
}
export type Context = Awaited<ReturnType<typeof CTX>>

