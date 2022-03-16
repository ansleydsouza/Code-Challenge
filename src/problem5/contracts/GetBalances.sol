// SPDX-License-Identifier: MIT
pragma solidity ^0.4.21;

contract Token { 
  function balanceOf(address) public view returns (uint);
}

contract GetBalances {

    function tokenBalance(address wallet, address token) public view returns (uint) {
        uint256 tokenCode;
        assembly { tokenCode := extcodesize(token) }

        if (tokenCode > 0 && token.call(bytes4(0x70a08231), wallet)){
            return Token(token).balanceOf(wallet);
        }else {
            return 0;
        }
    }

  function getBalances(address wallet, address[] tokens) external view returns (uint[]){
      uint[] memory addrBalances = new uint[](tokens.length);

      for(uint i = 0; i < tokens.length; i++){
          if (tokens[i] != address(0x0)){
              addrBalances[i] = tokenBalance(wallet, tokens[i]);
          }
          else {
              addrBalances[i] = wallet.balance;
          }
      }

      return addrBalances;
  }
}