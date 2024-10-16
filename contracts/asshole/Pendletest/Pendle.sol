// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./IYT.sol";
import "./IPT.sol";

contract pendle {
   struct PY {
    IPT pt;
    IYT yt;
   }

   uint public c = 10;

   function get(address pt, address yt) public view returns(uint d){
       PY memory pny = PY(IPT(pt),IYT(yt));
       d = _get(pny);
   }

   function _get(PY memory pny) internal view returns(uint e){
      uint e1 = pny.pt.PTsupply();
      uint e2 = pny.yt.YTsupply();
      e = e1 + e2;
   }
}