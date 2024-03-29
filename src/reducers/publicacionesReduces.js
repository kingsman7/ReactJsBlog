import { GET_FOR_USER, LOADING, ERROR } from '../types/publicacionesTypes';

const INITIAL_STATE = {
    publicaciones:[],
    loading: false,
    error:''
};

export default (state= INITIAL_STATE, action)=>{
    switch (action.type) {
        case GET_FOR_USER:
			return {
				...state,
				publicaciones: action.payload,
                loading : false,
                error:''
			};

		case LOADING:
			return { ...state, loading: true };
        
        case ERROR:
        return { 
            ...state,
            error: action.payload,
            loading: false
         };

		default: return state;
    }
}