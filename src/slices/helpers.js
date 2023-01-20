import { createSlice } from '@reduxjs/toolkit';

export const makeSlice = (name) => {

    const initialState = {
        [name + 's']: []
    };

    const slice = createSlice({
        name,
        initialState,
        reducers: {
            ['set' + name.slice(0, 1).toUpperCase() + name.slice(1) + 's'](
                state,
                action
            ) {
                state[name + 's'] = action.payload;
            },
            ['set' + name.slice(0, 1).toUpperCase() + name.slice(1)](
                state,
                action
            ) {
                state[name + 's'].push(action.payload);
            },
            ['update' + name.slice(0, 1).toUpperCase() + name.slice(1)](
                state,
                action
            ) {
                const value = action.payload;
                state[name + 's'] = state[name + 's'].map((_v) => {
                    if (_v.id === value.id) {
                        return value;
                    }

                    return _v;
                });
            },
            ['delete' + name.slice(0, 1).toUpperCase() + name.slice(1)](
                state,
                action
            ) {
                state[name + 's'] = state[name + 's'].filter((v) => v.id !== action.payload);
            }
        }
    });

    return {
        actions: slice.actions,
        reducer: slice.reducer
    }
}