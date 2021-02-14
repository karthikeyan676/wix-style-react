export const groupType = `
<Box direction="vertical">
<AvatarGroup type="stretched" items={[{name: 'first user'}, {name: 'second user'}, {name: 'third avatar'}]}/>
<AvatarGroup type="condensed" items={[{name: 'first user'}, {name: 'second user'}, {name: 'third avatar'}]}/>
</Box>
`;

export const maxItems = `
<AvatarGroup
  maxItems={5}
  items={[
    { name: 'first user' },
    { name: 'second user' },
    { name: 'third avatar' },
    { name: 'fourth avatar' },
    { name: 'fifth avatar' },
    { name: 'sixth avatar' }
  ]}
/>;

`;
export const size = `
<Box direction="vertical">
<AvatarGroup size="small" items={[{name: 'first user'}, {name: 'second user'}, {name: 'third avatar'}]}/>
<AvatarGroup size="medium" items={[{name: 'first user'}, {name: 'second user'}, {name: 'third avatar'}]}/>
</Box>
`;

export const divider = `
<AvatarGroup showDivider items={[{name: 'first avatar'}, {name: 'second avatar'}, {name: 'third avatar'}]}/>
`;
