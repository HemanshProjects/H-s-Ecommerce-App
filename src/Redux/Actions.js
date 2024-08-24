export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const INC_QTY = 'INC_QTY';
export const DEC_QTY = 'DEC_QTY';

export const addItem = (item) => {
    return {
        type: ADD_ITEM,
        payload: item
    };
};

// Action creator for deleting an item
export const deleteItem = (id) => {
    return {
        type: DELETE_ITEM,
        payload: id
    };
};
export const incQty = (id) => {
    return {
        type: INC_QTY,
        payload: id
    };
};
export const decQty = (id) => {
    return {
        type: DEC_QTY,
        payload: id
    };
};