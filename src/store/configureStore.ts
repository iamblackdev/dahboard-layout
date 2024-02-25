import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import authReducer from './authReducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
	key: 'userAuth',
	storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export default function configureAppStore() {
	return configureStore({
		reducer: { rootReducer, persistedAuthReducer },
		middleware: (getDefaultMiddleware) => {
			return getDefaultMiddleware({
				serializableCheck: false,
			});
		},
	});
}

export const store = configureAppStore();
export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
