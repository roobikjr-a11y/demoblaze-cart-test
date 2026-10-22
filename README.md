# Demoblaze — автотест корзины (Playwright)

Автоматизация тест-кейса для интернет-магазина https://www.demoblaze.com/.

## Сценарий

1. Открыть страницу https://www.demoblaze.com/
2. Нажать на товар **Samsung galaxy s6**
3. На странице товара нажать **Add to cart**
4. Нажать **OK** в pop-up («Product added»)
5. Нажать кнопку **Cart** в шапке сайта

**Ожидаемый результат:** в корзине отображается единственный элемент «Samsung galaxy s6».

## Запуск

```bash
npm install
npx playwright install chromium
npx playwright test
```

Требуется Node.js 18+.

Тест: `tests/cart.spec.js` — проверяет, что в корзине ровно одна строка
с названием «Samsung galaxy s6». После прогона HTML-отчёт: `npx playwright show-report`.

## Стек

- [Playwright](https://playwright.dev/) (Test Runner), JavaScript
- Браузер: Chromium
