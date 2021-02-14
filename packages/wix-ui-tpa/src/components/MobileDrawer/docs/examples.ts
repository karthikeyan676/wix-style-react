export const importExample = `import { MobileDrawer } from 'wix-ui-tpa/MobileDrawer';`;

const buildExample = (content: string) => `
class ModalExample extends React.Component {
  state = {
    isOpen: false,
  };

  onOpenDialogButtonClick = () => this.setState({ isOpen: true });

  onClickOutOfModal = () => this.setState({ isOpen: false });

  render() {
    const { isOpen } = this.state;

    return (
      ${content}
    );
  }
}
`;

export const exampleSocailMenu = buildExample(`
  <MobileExample>
    <Button upgrade onClick={this.onOpenDialogButtonClick}>Open MobileDrawer</Button>
      <MobileDrawer isOpen={isOpen} onRequestClose={this.onClickOutOfModal}> 
        <div style={{width: '100vw', textAlign: 'center', padding: '10px'}}>
          <Text typography="smallTitle">
            Share
          </Text>
          <SocialBar>
            <SocialBar.Icon icon={<Icons.Facebook/>} />
            <SocialBar.Icon icon={<Icons.Instagram/>} />
            <SocialBar.Icon icon={<Icons.Linkedin/>} />
            <SocialBar.Icon icon={<Icons.Tumblr/>} />
          </SocialBar>
        </div>
      </MobileDrawer>
  </MobileExample>
 `);

export const exampleActionMenu = buildExample(`
  <MobileExample>
    <Button upgrade onClick={this.onOpenDialogButtonClick}>Open MobileDrawer</Button>
      <MobileDrawer isOpen={isOpen} onRequestClose={this.onClickOutOfModal}> 
        <div style={{width: '100vw'}}>
          <ActionsMenuLayout>
            <ActionsMenuLayout.Item
              onClick={() => console.log('Video clicked')}
              content="Take a Video"
              prefixIcon={<Icons.VideoCamera />}
              />
            <ActionsMenuLayout.Item
              onClick={() => console.log('Picture clicked')}
              content="Take a Picture"
              prefixIcon={<Icons.PhotoCamera />}
              />
            <ActionsMenuLayout.Divider />
            <ActionsMenuLayout.Item
              onClick={this.onClickOutOfModal}
              content="Close"
              prefixIcon={<Icons.Close />}
              />
          </ActionsMenuLayout>
        </div>
      </MobileDrawer>
  </MobileExample>
 `);
