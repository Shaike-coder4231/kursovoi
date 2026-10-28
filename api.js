const BASE_URL = 'https://dummyjson.com';

// Получить все товары (имитируем каталог ПО)
export const getProducts = async (limit = 20) => {
  const res = await fetch(`${BASE_URL}/products?limit=${limit}&delay=500`); // delay для имитации загрузки
  if (!res.ok) throw new Error('Ошибка загрузки товаров');
  return res.json();
};

// Получить один товар (лицензию/ПО)
export const getProductById = async (id) => {
  const res = await fetch(`${BASE_URL}/products/${id}?delay=300`);
  if (!res.ok) throw new Error('Товар не найден');
  return res.json();
};

// Получить корзину пользователя
export const getCart = async (userId = 1) => {
  const res = await fetch(`${BASE_URL}/carts/user/${userId}?delay=300`);
  return res.json();
};
