@if $font-size-root != null {
    --#{$variable-prefix}root-font-size: #{$font-size-root};
  }
  --#{$variable-prefix}body-font-family: #{$font-family-base};
  --#{$variable-prefix}body-font-size: #{$font-size-base};
  --#{$variable-prefix}body-font-weight: #{$font-weight-base};
  --#{$variable-prefix}body-line-height: #{$line-height-base};
  --#{$variable-prefix}body-color: #{$body-color};
  @if $body-text-align != null {
    --#{$variable-prefix}body-text-align: #{$body-text-align};
  }
  --#{$variable-prefix}body-bg: #{$body-bg};