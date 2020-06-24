import { renderHook } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';
import { useAuth, AuthProvider } from '../../hooks/AuthContext';
import api from '../../services/api';

const apiMock = new MockAdapter(api);

describe('Auth hook', () => {
    it('should be able to signin', async () => {
        const apiResponse = {
            user: {
                id: 'user123',
                name: 'Ilgsson',
                email: 'ilgssonbraga@gmail.com',
            },
            token: 'token-123',
        };

        apiMock.onPost('sessions').reply(200, apiResponse);

        const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

        const { result, waitForNextUpdate } = renderHook(() => useAuth(), {
            wrapper: AuthProvider,
        });

        result.current.signin({
            email: 'ilgssonbraga@gmail.com',
            password: '123456',
        });

        await waitForNextUpdate();

        expect(setItemSpy).toHaveBeenCalledWith(
            '@GoBarber:token',
            apiResponse.token,
        );
        expect(setItemSpy).toHaveBeenCalledWith(
            '@GoBarber:user',
            JSON.stringify(apiResponse.user),
        );
        expect(result.current.user.email).toEqual('ilgssonbraga@gmail.com');
    });
});
