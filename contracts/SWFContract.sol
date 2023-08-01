// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <=0.9.0;
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SWFContract is Ownable {
    uint256 public total;

    struct ContractInfo {
        uint8 rentType; // 0: 전세, 1: 월세
        uint256 rentStart;
        uint256 rentEnd;
        uint256 contractDate;
    }

    mapping(uint256 => mapping(string => ContractInfo[])) public datas;
    // mapping(uint256 => mapping(string => ContractInfo[])) public pendings;

    constructor() {
        total = 0;
    }

    function registerData(
        uint256 _key,
        string memory _detail,
        uint256 _rentStart,
        uint256 _rentEnd,
        uint256 _contractDate,
        uint8 _rentType
    ) external {
        datas[_key][_detail].push(
            ContractInfo(_rentType, _rentStart, _rentEnd, _contractDate)
        );
    }

    // function permitData(
    //     uint256 _key,
    //     string memory _detail
    // ) external onlyOwner {
    //     ContractInfo[] memory _pendings = pendings[_key][_detail];

    //     for (uint256 i = 0; i < _pendings.length; i++) {
    //         datas[_key][_detail].push(_pendings[i]);
    //     }

    //     delete pendings[_key][_detail];
    // }
}
