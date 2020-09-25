import {applicationConstants} from "../constants";

export const filterReducer = (state =
                                  {
                                      filter: {
                                          year: [2000,2020],
                                          airflow: [50, 1000],
                                          maxPower: [70, 150],
                                          maxSpeed: [100, 400],
                                          diamter: [1000, 5000],
                                          firm: [200, 400],
                                          global:[9000,25000]
                                      }

                                  }
    , action
) => {
    // if(action.type === appConstants.searchYear){
    switch (action.type) {
        case applicationConstants.searchYear:
            state = {...state};
            state.filter.year = [...action.payload];
            // console.log(state);
            return state;

        case applicationConstants.searchAirflow:
            state = {...state};
            state.filter.airflow = [...action.payload];
            console.log(state.filter)
            // console.log(state);
            return state;
        case applicationConstants.searchMaxPower:
            state = {...state};
            state.filter.maxPower = [...action.payload];
            // console.log(state);
            return state;
        case applicationConstants.searchMaxSpeed:
            state = {...state};
            state.filter.ma = [...action.payload];
            // console.log(state);
            return state;
        case applicationConstants.searchFanSweepDiameter:
            state = {...state};
            state.filter.diamter = [...action.payload];
            // console.log(state);
            return state;
        case applicationConstants.searchFirm:
            state = {...state};
            state.filter.firm = [...action.payload];
            // console.log(state);
            return state;
        case applicationConstants.searchGlobal:
            state={...state};
            state.filter.global=[...action.payload];
            return state;
        default:
            return state;

    }


};
