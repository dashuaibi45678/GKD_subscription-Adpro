export interface RawDeprecatedKeysSetting {
  /**
   * 应用ID
   */
  id: string;

  /**
   * 应用名称
   */
  name: string;

  /**
   * 废弃的key值，不可再次使用。
   */
  deprecatedKeys: number[];
}
