"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUpdatedFavorites = void 0;
const getUpdatedFavorites = (plant, favorites) => {
    const index = favorites.findIndex((p) => p.id === plant.id);
    if (index !== -1) {
        return favorites.filter((p) => p.id !== plant.id);
    }
    else {
        return [...favorites, plant];
    }
};
exports.getUpdatedFavorites = getUpdatedFavorites;
