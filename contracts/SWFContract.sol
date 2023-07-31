// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <=0.9.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SWFContract is Ownable {
    uint256 public count;

    string public name;

    constructor() {
        name = "SWL";
        count = 0;
    }
}
