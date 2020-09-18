const puppeteer = require("puppeteer");

// 定数 (後述)
const LOGIN_USER = "R009283001681"; // 使用したいユーザーID
const LOGIN_PASS = "X2cBrZPY"; // 使用したいユーザーIDのパスワード
const TARGET_URL = "https://jp.surveymonkey.com/r/tcu_2020_3";
const LOGIN_USER_SELECTOR = "input";
/**
 * スクリーンショットのファイル名を取得します。
 * @returns YYYYMMDD-HHMMSS.png 形式の文字列
 */
function getFilename() {
  // タイムゾーンを調整して文字列化します。
  const offset = new Date().getTimezoneOffset() * 60000;
  const iso = new Date(Date.now() - offset).toISOString();
  const m = iso.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/);
  return `${m[1]}${m[2]}${m[3]}-${m[4]}${m[5]}${m[6]}.png`;
}

/**
 * メイン処理です。
 */
(async () => {
  const browser = await puppeteer.launch({
    // ブラウザを開く
    headless: false, // ブラウザを表示するか (デバッグの時は false にしたほうが画面が見えてわかりやすいです)
  });
  const page = await browser.newPage(); // 新規ページ
  const navigationPromise = page.waitForNavigation();
  await page.setViewport({ width: 1440, height: 900 }); // ビューポート (ウィンドウサイズ)
  await page.setExtraHTTPHeaders({
    // 必要な場合、HTTPヘッダを追加
    "Accept-Language": "ja",
  });
  //指定URLに遷移
  await page.goto(TARGET_URL, { waitUntil: "domcontentloaded" });
  await Promise.all([
    // クリック後ページ遷移後通信が完了するまで待つ
    page.waitForNavigation({ waitUntil: "networkidle0" }),
    await page.waitForSelector(
      ".survey-page > .survey-page-body > form > .survey-submit-actions > .btn"
    ),
    await page.click(
      ".survey-page > .survey-page-body > form > .survey-submit-actions > .btn"
    ),
  ]);
  //ログインフォーム選択
  await page.type(LOGIN_USER_SELECTOR, LOGIN_USER); // ユーザー名入力

  // クリック後ページ遷移後通信が完了するまで待つ
  page.waitForNavigation({ waitUntil: "networkidle0" }),
    await page.waitForSelector(
      ".survey-page > .survey-page-body > form > .survey-submit-actions > .btn:nth-child(2)"
    ),
    await page.click(
      ".survey-page > .survey-page-body > form > .survey-submit-actions > .btn:nth-child(2)"
    ),
    await navigationPromise;

  await page.waitForSelector('input[id="533530257_3524856443"]');
  await page.click('input[id="533530257_3524856443"]');

  await page.waitForSelector(
    ".survey-page > .survey-page-body > form > .survey-submit-actions > .btn:nth-child(2)"
  );
  await page.click(
    ".survey-page > .survey-page-body > form > .survey-submit-actions > .btn:nth-child(2)"
  );

  await navigationPromise;

  await page.waitForSelector('input[id="533530256_3524856434"]');
  await page.click('input[id="533530256_3524856434"]');
  await page.waitForSelector(
    ".survey-page > .survey-page-body > form > .survey-submit-actions > .btn:nth-child(2)"
  );
  await page.click(
    ".survey-page > .survey-page-body > form > .survey-submit-actions > .btn:nth-child(2)"
  );

  await navigationPromise;

  await page.waitForSelector('input[id="533549572_3524962213_3524962227"]');
  await page.click('input[id="533549572_3524962213_3524962227"]');

  await page.waitForSelector('input[id="533549572_3524962214_3524962227"]');
  await page.click('input[id="533549572_3524962214_3524962227"]');

  await page.waitForSelector('input[id="533549572_3524962215_3524962227"]');
  await page.click('input[id="533549572_3524962215_3524962227"]');

  await page.waitForSelector('input[id="533549572_3524962216_3524962227"]');
  await page.click('input[id="533549572_3524962216_3524962227"]');

  await page.waitForSelector('input[id="533549572_3524962217_3524962227"]');
  await page.click('input[id="533549572_3524962217_3524962227"]');

  await page.waitForSelector('input[id="533549572_3524962218_3524962227"]');
  await page.click('input[id="533549572_3524962218_3524962227"]');

  await page.waitForSelector('input[id="533549572_3524962219_3524962227"]');
  await page.click('input[id="533549572_3524962219_3524962227"]');

  await page.waitForSelector('input[id="533549572_3524962220_3524962227"]');
  await page.click('input[id="533549572_3524962220_3524962227"]');

  await page.waitForSelector('input[id="533549572_3524962221_3524962227"]');
  await page.click('input[id="533549572_3524962221_3524962227"]');

  await page.waitForSelector('input[id="533549572_3524962222_3524962227"]');
  await page.click('input[id="533549572_3524962222_3524962227"]');

  await page.waitForSelector('input[id="533549572_3524962223_3524962227"]');
  await page.click('input[id="533549572_3524962223_3524962227"]');

  await page.waitForSelector(
    ".survey-page > .survey-page-body > form > .survey-submit-actions > .btn:nth-child(2)"
  );
  await page.click(
    ".survey-page > .survey-page-body > form > .survey-submit-actions > .btn:nth-child(2)"
  );
  // ブラウザを閉じる
  // await browser.close();
})().catch((e) => console.error(e));
