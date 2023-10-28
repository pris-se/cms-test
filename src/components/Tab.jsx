import React, { lazy, Suspense } from 'react';
async function delay(promise) {
    return new Promise(resolve => {
        setTimeout(resolve, 500);
    }).then(() => promise);
}
export const Tab = ({ tab }) => {
    if (!tab?.path) return null
    const TabComponent = lazy(() => delay(import(`../${tab.path}`)));
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <TabComponent />
        </Suspense>
    );
};

