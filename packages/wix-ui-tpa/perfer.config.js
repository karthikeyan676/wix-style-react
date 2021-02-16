const files = {
    'ActionsMenuLayout.bundle.min.js': 6,
    'ActionsMenuLayoutPerfBasic.bundle.min.js': 6.5,
    'ActionsMenuLayoutPerfExtended.bundle.min.js': 7,
    'AddItem.bundle.min.js': 45.5,
    'AddItemPerfBasic.bundle.min.js': 45.5,
    'AddItemPerfExtended.bundle.min.js': 45.5,
    'Autocomplete.bundle.min.js': 37,
    'Avatar.bundle.min.js': 16.1,
    'AvatarGroup.bundle.min.js': 20,
    'AvatarGroupPerfBasic.bundle.min.js': 20,
    'AvatarGroupPerfExtended.bundle.min.js': 21,
    'Badge.bundle.min.js': 3,
    'BadgePerfBasic.bundle.min.js': 3,
    'BadgePerfExtendedBad.bundle.min.js': 3.1,
    'BadgePerfExtendedGood.bundle.min.js': 3,
    'Button.bundle.min.js': 9,
    'ButtonPerfBasic.bundle.min.js': 9,
    'ButtonPerfExtended.bundle.min.js': 10,
    'CalendarCell.bundle.min.js': 5,
    'CalendarCellPerfBasic.bundle.min.js': 5,
    'CalendarCellPerfExtended.bundle.min.js': 5,
    'CalendarPopover.bundle.min.js': 11,
    'CalendarPopoverPerfBasic.bundle.min.js': 12,
    'CalendarPopoverPerfExtended.bundle.min.js': 12,
    'Card.bundle.min.js': 5,
    'CardPerfBasic.bundle.min.js': 5,
    'CardPerfExtended.bundle.min.js': 5,
    'Checkbox.bundle.min.js': 7,
    'CheckboxPerfBasic.bundle.min.js': 7,
    'CheckboxPerfExtended.bundle.min.js': 7,
    'CheckboxGroup.bundle.min.js': 5,
    'CheckboxGroupPerfBasic.bundle.min.js': 5,
    'CheckboxGroupPerfExtended.bundle.min.js': 5,
    'ColorPicker.bundle.min.js': 36,
    'ColorPickerBasic.bundle.min.js': 36,
    'ColorPickerExtended.bundle.min.js': 36,
    'CopyUrlButton.bundle.min.js': 38,
    'Counter.bundle.min.js': 35,
    'CounterPerfBasic.bundle.min.js': 35,
    'CounterPerfExtended.bundle.min.js': 35,
    'CounterBadge.bundle.min.js': 5,
    'CounterBadgePerfBasic.bundle.min.js': 5,
    'CounterBadgePerfExtendedBad.bundle.min.js': 5,
    'CounterBadgePerfExtendedGood.bundle.min.js': 5,
    'DatePicker.bundle.min.js': 187,
    'DatePickerPerfBasic.bundle.min.js': 187,
    'DatePickerPerfExtended.bundle.min.js': 187,
    'DatePickerInput.bundle.min.js': 210,
    'DatePickerInputPerfBasic.bundle.min.js': 210,
    'DatePickerInputPerfExtended.bundle.min.js': 210,
    'Dialog.bundle.min.js': 11,
    'DialogPerferBasic.bundle.min.js': 11,
    'DialogPerferExtendedWired.bundle.min.js': 11,
    'DialogPerferExtendedFixed.bundle.min.js': 11,
    'Divider.bundle.min.js': 5,
    'DividerPerfBasic.bundle.min.js': 5,
    'DividerPerfExtended.bundle.min.js': 5,
    'DotNavigation.bundle.min.js': 8,
    'DotNavigationPerfBasic.bundle.min.js': 8,
    'DotNavigationPerfExtended.bundle.min.js': 8,
    'Dropdown.bundle.min.js': 52,
    'DropdownPerfBasic.bundle.min.js': 52,
    'DropdownPerfExtended.bundle.min.js': 52,
    'Event.bundle.min.js': 9.1,
    'EventPerfBasic.bundle.min.js': 9.1,
    'EventPerfExtended.bundle.min.js': 9.1,
    'FloatingDropdown.bundle.min.js': 44,
    'FloatingDropdownPerfBasic.bundle.min.js': 44,
    'FloatingDropdownPerfExtended.bundle.min.js': 44,
    'Grid.bundle.min.js': 5,
    'GridPerfBasic.bundle.min.js': 5,
    'GridPerfExtended.bundle.min.js': 5,
    'HeroImage.bundle.min.js': 15,
    'HeroImagePerfBasic.bundle.min.js': 15,
    'HeroImagePerfExtended.bundle.min.js': 15,
    'IconButton.bundle.min.js': 7,
    'IconButtonPerfBasic.bundle.min.js': 7,
    'IconButtonPerfBad.bundle.min.js': 7,
    'IconButtonPerfGood.bundle.min.js': 7,
    'IconToggle.bundle.min.js': 6,
    'IconTogglePerfBasic.bundle.min.js': 6,
    'IconTogglePerfExtended.bundle.min.js': 6,
    'Image.bundle.min.js': 15,
    'ImagePerfBasic.bundle.min.js': 15,
    'ImagePerfExtended.bundle.min.js': 15,
    'ThumbnailImage.bundle.min.js': 15,
    'Input.bundle.min.js': 6,
    'LikeButton.bundle.min.js': 7.6,
    'LikeButtonPerfBasic.bundle.min.js': 7.6,
    'LikeButtonPerfExtended.bundle.min.js': 7.6,
    'NewCard.bundle.min.js': 5,
    'NewCardPerfBasic.bundle.min.js': 5,
    'OverlappingCard.bundle.min.js': 5,
    'Pagination.bundle.min.js': 10.1,
    'PaginationPerfBasic.bundle.min.js': 10.1,
    'PaginationPerfExtended.bundle.min.js': 10.1,
    'Picker.bundle.min.js': 9,
    'PickerPerfBasic.bundle.min.js': 9,
    'PickerPerfExtended.bundle.min.js': 9,
    'Popover.bundle.min.js': 29,
    'PopoverPerfBasic.bundle.min.js': 29,
    'PopoverPerfExtended.bundle.min.js': 29,
    'ProgressBar.bundle.min.js': 6,
    'ProgressBarPerfBasic.bundle.min.js': 6,
    'ProgressBarPerfExtended.bundle.min.js': 6,
    'RadioButton.bundle.min.js': 7.2,
    'RadioButtonPerfBasic.bundle.min.js': 7.2,
    'RadioButtonPerfExtended.bundle.min.js': 7.2,
    'RadioButtonGroup.bundle.min.js': 5,
    'RadioButtonGroupPerfBasic.bundle.min.js': 5,
    'RadioButtonGroupPerfExtended.bundle.min.js': 5,
    'Ratings.bundle.min.js': 7.6,
    'SectionNotification.bundle.min.js': 10.5,
    'ShareButton.bundle.min.js': 8,
    'SocialBar.bundle.min.js': 35,
    'Spinner.bundle.min.js': 5,
    'StatesButton.bundle.min.js': 10,
    'StripCard.bundle.min.js': 5,
    'Tabs.bundle.min.js': 18.2,
    'Tags.bundle.min.js': 8,
    'Text.bundle.min.js': 5,
    'TextArea.bundle.min.js': 34,
    'TextButton.bundle.min.js': 7,
    'TextField.bundle.min.js': 37.1,
    'Toast.bundle.min.js': 8.3,
    'ToggleSwitch.bundle.min.js': 6,
    'Tooltip.bundle.min.js': 31,
    'BoxSelection.bundle.min.js': 10,
    'Tag.bundle.min.js': 6,
};

module.exports = {
  bundleSize: {
    files: Object.entries(files).map(([name, size]) => ({
      glob: `.perfer/dist/statics/${name}`,
      maxSize: `${size}kb`,
    })),
  },
};
