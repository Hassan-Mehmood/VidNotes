import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
    beforeLoad: async ({ context }) => {
        if (!context.userId) {
            throw new Error('Not authenticated');
        }
    },
    errorComponent: ({ error }) => {
        if (error.message === 'Not authenticated') {
            return (
                <div>
                    <h1>Not authenticated</h1>
                </div>
            );
        }

        throw error;
    },
    component: Home,
});

function Home() {
    return (
        <div className="p-2">
            <h3>Welcome Home!!!</h3>
        </div>
    );
}
