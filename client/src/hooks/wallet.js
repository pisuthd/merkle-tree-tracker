import React, { createContext, useContext, useReducer, useState, useMemo, useCallback, useEffect } from "react";
import Wallet from 'ethereumjs-wallet'

const WalletContext = createContext();

const useWalletContext = () => {
    return useContext(WalletContext)
}

const ACTIONS = {
    SAVE: "SAVE"
}

const reducer = (state, { type, payload }) => {

    switch (type) {
        case ACTIONS.SAVE:
            const { address, publicKey, privateKey } = payload;
            return {
                ...state,
                address,
                publicKey,
                privateKey

            }
        default: {
            throw Error(`Unexpected action type in WalletContext reducer: '${type}'.`)
        }
    }

}

const provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, {})

    const updateWallet = useCallback(({ address, publicKey, privateKey }) => {
        dispatch({ type: ACTIONS.SAVE, payload: { address, publicKey, privateKey } })
    }, [])

    return (
        <WalletContext.Provider
            value={useMemo(() => [state, {
                updateWallet,
            }], [
                state,
                updateWallet,
            ])}
        >
            {children}
        </WalletContext.Provider>
    )
}

export const useWallet = () => {
    const [{ address, publicKey, privateKey }, { updateWallet }] = useWalletContext();

    useEffect(() => {

        if (!privateKey) {

            let address;
            let publicKey;
            let privateKey;
            if (localStorage.getItem("address")) {
                address = localStorage.getItem("address")
            }
            if (localStorage.getItem("publicKey")) {
                publicKey = localStorage.getItem("publicKey")
            }
            if (localStorage.getItem("privateKey")) {
                privateKey = localStorage.getItem("privateKey")
            }

            if (!address || !publicKey || !privateKey) {
                const data = Wallet.generate();
                address = data.getAddressString();
                publicKey = data.getPublicKeyString();
                privateKey = data.getPrivateKeyString();
                localStorage.setItem("address", address);
                localStorage.setItem("publicKey", publicKey);
                localStorage.setItem("privateKey", privateKey);
            }

            updateWallet({
                address: address,
                publicKey: publicKey,
                privateKey: privateKey
            });

        }

    }, [privateKey])

    const generateNew = () => {
        const data = Wallet.generate();
        const address = data.getAddressString();
        const publicKey = data.getPublicKeyString();
        const privateKey = data.getPrivateKeyString();
        localStorage.setItem("address", address);
        localStorage.setItem("publicKey", publicKey);
        localStorage.setItem("privateKey", privateKey);
        updateWallet({address, publicKey, privateKey})
    }

    return {
        address,
        publicKey,
        privateKey,
        generateNew
    }
}

export default provider;