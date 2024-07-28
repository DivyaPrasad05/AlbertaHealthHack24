import React from 'react';

const CharacterSelectionComponent = () => {
    return (
        <div class="flex flex-col items-center justify-center min-h-screen">
            <div class="flex items-center justify-center">
                <h1 class="font-Baloo2 text-blue-words font-bold py-2 px-4 rounded text-4xl">Choose your buddy</h1>
            </div>

            <img src="/images/Frame_2.png" alt="Po" class="my-4 pb-8" />

            <button class="bg-ocean-teal hover:bg-blue-hover text-blue-words font-bold py-4 px-8 rounded font-Baloo2 text-xl">
                Talk to PoPo
            </button>
        </div>


    );
};

export default CharacterSelectionComponent;