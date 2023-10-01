export const cardReducer = (state = { cardItems: [] }, action) => {
    switch (action.type) {
      case "ADD_CARD":
        const item = action.payload;
        const existItem = state.cardItems.find((x) => x.id === item.id);
        if (existItem) {
          return {
            ...state,
            cardItems: state.cardItems.map((x) =>
              x.id === existItem.id ? item : x
            ),
          };
        } else {
          return {
            ...state,
            cardItems: [...state.cardItems, item],
          };
        }
  
      case "REMOVE_CARD":
        const newCardItems = state.cardItems.filter((x) => x.id !== action.payload);
        return {
          ...state,
          cardItems: newCardItems,
        };
  
      default:
        return state;
    }
  };
  