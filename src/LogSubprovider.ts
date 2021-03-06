import { Web3Wrapper } from "@0x/web3-wrapper";
import { JSONRPCRequestPayload, SupportedProvider } from "ethereum-types";
import { Subprovider, Callback, ErrorCallback } from "@0x/subproviders";

/**
 * This class implements the [web3-provider-engine](https://github.com/MetaMask/provider-engine)
 * subprovider interface. It forwards JSON RPC requests involving the domain of a signer (getAccounts,
 * sendTransaction, signMessage etc...) to the provider instance supplied at instantiation. All other requests
 * are passed onwards for subsequent subproviders to handle.
 */
export class LogSubprovider extends Subprovider {
  /**
   * Instantiates a new SignerSubprovider.
   * @param supportedProvider Web3 provider that should handle  all user account related requests
   */
  constructor() {
    super();
  }
  /**
   * This method conforms to the web3-provider-engine interface.
   * It is called internally by the ProviderEngine when it is this subproviders
   * turn to handle a JSON RPC request.
   * @param payload JSON RPC payload
   * @param next Callback to call if this subprovider decides not to handle the request
   * @param end Callback to call if subprovider handled the request and wants to pass back the request.
   */
  // tslint:disable-next-line:prefer-function-over-method async-suffix
  public async handleRequest(
    payload: JSONRPCRequestPayload,
    next: Callback,
    end: ErrorCallback
  ): Promise<void> {
    console.log(payload.method);
    next();
  }
}
