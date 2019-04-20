
const initState = {
    addedItems: []
}
/*
const cartReducer= (state = {},action)=>{
    if(action.type === CHANGE_IDMENU){
        state.idmenu=action.id;
    }
}
*/
const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case 'REMOVE_ITEM':
            let remove = removeItem(state,action.id)
            state = remove;
            return state
        case 'ADD_TO_CART':
            let teste = addtocart(state, action.id);
            state = teste;
            return state
        case 'ADD_QUANTITY':
            let add = addQuantity(state, action.id);
            state = add;
            return state
        case 'SUB_QUANTITY':
            let sub = subQuantity(state, action.id);
            state = sub;
            return state
        default:
            return state
    }
}

const addtocart = (state, action) => {
    let addedItem = state.addedItems.find(item => item.nom === action.nom)
    console.log("atoooo 1");
    let existed_item = state.addedItems.find(item => action.nom === item.nom)
    console.log("existed item", existed_item)
    if (existed_item) {
        existed_item.quantite += 1
        return {
            ...state
        }
    }
    else {
        addedItem = action
        addedItem.quantite = 1;
        return {
            ...state,
            addedItems: [...state.addedItems, addedItem]
        }
    }
}

const addQuantity = (state, action) => {
    let addedItem = state.addedItems.find(item => item.nom === action)
    addedItem.quantite += 1;
    return {
        ...state
    }
}

const subQuantity = (state, action) => {
    let addedItem = state.addedItems.find(item => item.nom === action)
    console.log("dededeeded", addedItem)
    if (addedItem.quantite === 1) {
        console.log("est 1")
        let new_items = state.addedItems.filter(item => item.nom !== action)
        console.log("new items", new_items)
        state.addedItems = new_items;
        return {
            ...state
        }
    } else {
        addedItem.quantite -= 1;
        return {
            ...state
        }
    }
}

const removeItem = (state, action) => {
    console.log("state",state)
    console.log("action",action)
    let itemToRemove = state.addedItems.find(item => action === item.nom)
    let haha = state.addedItems.filter(item => action !== item.nom)
    console.log("removeItem",itemToRemove)
    console.log("haha",haha)
    state.addedItems = haha;
    return {
        ...state
    }
}

export default cartReducer;