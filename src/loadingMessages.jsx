import React from "react";

export default function LoadingMessage({ isLoading }) {

    const loadingMessages = [
        "Chef-Claude is working its magic...✨",
        "Don't order instant noodles yet.🤓",
        "Almost there...🚚",
        "We're not going anywhere... 👀",
        "Something delicious is cooking... 🍳",
        "Your taste buds are about to have a great day.",
        "Today you might discover your new favorite recipe.",
    ];

    const [loadingMessage, setLoadingMessage] = React.useState(
        loadingMessages[0]
    );

    React.useEffect(() => {
        if (!isLoading) return;

        let index = 0;

        const interval = setInterval(() => {
            index = (index + 1) % loadingMessages.length;
            setLoadingMessage(loadingMessages[index]);
        }, 1000);

        return () => clearInterval(interval);
    }, [isLoading]);

    if (!isLoading) return null;

    return (
       <div className="loading-container" aria-live="polite">
            <div className="loading-spinner"></div>

            <p key={loadingMessage}>
                {loadingMessage}
            </p>
        </div>
    );
}