import {PersistentMap} from "near-sdk-as";

export function hashNameAndPushIntoBlockChain(value: string): number {
    let map = new PersistentMap<number, string>("mySimpleASSmartContractForNearBlockChain");
    var hash = value.split('').reduce((prevHash, currVal) =>
    (((prevHash << 5) - prevHash) + currVal.charCodeAt(0))|0, 0);
    map.set(hash, value);
    return hash;
}   


export function getNameByHashInBlockChain(value: string): string {
    let map = new PersistentMap<number, string>("mySimpleASSmartContractForNearBlockChain");
    var hash = parseInt(value);
    return map.getSome(hash);
}