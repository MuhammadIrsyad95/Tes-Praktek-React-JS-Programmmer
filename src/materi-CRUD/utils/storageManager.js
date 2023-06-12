// Example
const example = [
  {
    id: 1,
    title: "course title",
    description: "course description",
    hargaJual: "harga jual",
    hargaBeli: "harga beli",
    stok: "jumlah stok",
    foto: {
      url: "URL foto",
      filename: "nama file",
      fileType: "tipe file",
    },
    // foto: null,
  },
];

const storageKey = "courseCRUD";

const setItem = (value) => {
  const dataWithPhotoInfo = value.map((item) => {
    if (item.foto) {
      const { url, filename, fileType } = item.foto;
      return {
        ...item,
        foto: {
          url,
          filename,
          fileType,
        },
      };
    }
    return item;
  });
  const valueToString = JSON.stringify(value);
  localStorage.setItem(storageKey, valueToString);
};

const getItem = () => {
  const data = localStorage.getItem(storageKey);
  if (data) {
    return JSON.parse(data);
  }
  return null;
};

const storageManager = {
  set: setItem,
  get: getItem,
};

export default storageManager;
