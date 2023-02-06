import QrCodeReader from "qrcode-reader";

const decodeFile = ({ width, height, imageData }) => {
  const qr = new QrCodeReader();
  qr.callback = function (err, value) {
    // TODO handle error and decoding result
  };
  qr.decode({ width, height }, imageData);
};
