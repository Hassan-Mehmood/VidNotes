import { createServerFn } from "@tanstack/react-start"
import { getAuth } from "@clerk/tanstack-react-start/server"
import { getWebRequest } from "@tanstack/react-start/server"

export const fetchClerkAuth = createServerFn({ method: 'GET' }).handler(async () => {

    const { userId } = await getAuth(getWebRequest())

    return { userId }
})

