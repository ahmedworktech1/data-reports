import { test, expect } from '@playwright/test';
import { dbSnapshot, dbDiff } from '../helpers/db';
import cases from '../data/scenario.cases.json';

const TABLES = ['TODO_Table1', 'TODO_Table2'];

for (const c of cases as any[]) {
  test(`scenario - ${c.name}`, async ({ page }, testInfo) => {
    let n = 0;
    const shot = async (label: string) => {
      const p = testInfo.outputPath(`${String(++n).padStart(2, '0')}-${label}.png`);
      await page.screenshot({ path: p, fullPage: true });
      await testInfo.attach(label, { path: p, contentType: 'image/png' });
    };

    const before = await dbSnapshot(TABLES);

    await page.goto('TODO_path');
    await shot('open-page');

    // TODO: recorded steps here, with `await shot('<step-name>')` after EVERY meaningful action
    // use values from `c`, e.g. await page.getByLabel('TODO').fill(c.someField);

    const after = await dbSnapshot(TABLES);
    const diff = dbDiff(before, after);
    await testInfo.attach('db-diff', {
      body: JSON.stringify(diff, null, 2),
      contentType: 'application/json',
    });

    // TODO: assertions on expected DB changes, e.g.
    // expect(diff.TODO_Table1.added.length).toBe(1);
  });
}
