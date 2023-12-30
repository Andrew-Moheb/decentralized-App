// SPDX-License-Identifier: MIT

pragma solidity >=0.4.22 <0.9.0;

contract Addition {
    int public sum = 0;

    function add(int x, int y) public {
        sum = x + y;
    }
}
