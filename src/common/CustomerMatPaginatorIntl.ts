import { MatPaginatorIntl } from '@angular/material/paginator';

export class CustomMatPaginatorIntl extends MatPaginatorIntl {
  override itemsPerPageLabel = '每页条目';
  override nextPageLabel     = '下一页';
  override previousPageLabel = '上一页';
  override firstPageLabel    = '第一页';
  override lastPageLabel     = '最后一页';

  override getRangeLabel = function (page: number, pageSize: number, length: number) {
    if (length === 0 || pageSize === 0) {
      return `0 条中的 0`;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return `${length} 条中的 ${startIndex + 1} - ${endIndex}`;
  };
}

