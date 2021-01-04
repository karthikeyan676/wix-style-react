/* eslint-disable */
class TablePageExample extends React.Component {
  state = {
    data: [
      {
        name: `Red Slippers`,
        SKU: '0231664667',
        price: '$14.00',
        inventory: 'In Stock',
        collectionId: 1,
      },
      {
        name: `Velvet Hat`,
        SKU: '0231664669',
        price: '$23.00',
        inventory: 'In Stock',
        collectionId: 1,
        filterId: 2,
      },
      {
        name: `Silver Jeans`,
        SKU: '0231664667',
        price: '$69.00',
        inventory: 'In Stock',
        collectionId: 2,
      },
      {
        name: `Orange Stocks`,
        SKU: '0231664671',
        price: '$9.00',
        inventory: 'Out Of Stock',
        collectionId: 2,
        filterId: 1,
      },
      {
        name: `Black T-shirts`,
        SKU: '0231664672',
        price: '$19.00',
        inventory: 'In Stock',
        collectionId: 2,
        filterId: 1,
      },
    ],
    filterId: 0,
    searchTerm: '',
  };

  render() {
    const filteredData = this._getFilteredData();

    return (
      <Page height="600px">
        <Page.Header
          title="Products"
          actionsBar={
            <Box>
              <Box padding="SP1">
                <IconButton skin="inverted">
                  <Icons.More />
                </IconButton>{' '}
              </Box>
              <Box padding="SP1">
                <Button prefixIcon={<Icons.Add />}>Add Product</Button>{' '}
              </Box>
            </Box>
          }
        />

        <Page.Content>
          <Table
            data={filteredData}
            columns={[
              {
                title: 'Name',
                render: row => (
                  <Highlighter match={this.state.searchTerm}>
                    {row.name}
                  </Highlighter>
                ),
                width: '30%',
              },
              {
                title: 'SKU',
                render: row => row.SKU,
                width: '20%',
              },
              {
                title: 'Price',
                render: row => row.price,
                width: '20%',
              },
              {
                title: 'Inventory',
                render: row => row.inventory,
                width: '20%',
              },
            ]}
            onSelectionChange={selectedIds =>
              console.log(
                'Table.onSelectionChange(): selectedIds=',
                selectedIds,
              )
            }
            showSelection
          >
            <Page.Sticky>
              <Card>
                <Table.ToolbarContainer>
                  {selectionContext =>
                    selectionContext.selectedCount === 0
                      ? this._renderMainToolbar()
                      : this._renderActionsToolbar({ ...selectionContext })
                  }
                </Table.ToolbarContainer>
                <Table.SubToolbar>
                  <FormField label="Filtered by:" labelPlacement="left">
                    <TagList
                      tags={[
                        { id: '1', children: 'In Stock' },
                        { id: '2', children: 'Out Of Stock' },
                      ]}
                      maxVisibleTags={2}
                      actionButton={{ label: 'Clear All', onClick: () => {} }}
                    />
                  </FormField>
                </Table.SubToolbar>
                {filteredData.length ? (
                  <Table.Titlebar />
                ) : (
                  this._renderEmptyState()
                )}
              </Card>
            </Page.Sticky>
            <Card>
              <Table.Content titleBarVisible={false} />
            </Card>
          </Table>
        </Page.Content>
      </Page>
    );
  }

  _simulateData() {
    const initBaseData = () => [
        {
          name: `Red Slippers`,
          SKU: '0231664667',
          price: '$14.00',
          inventory: 'In Stock',
          collectionId: 1,
        },
        {
          name: `Velvet Hat`,
          SKU: '0231664669',
          price: '$23.00',
          inventory: 'In Stock',
          collectionId: 1,
          filterId: 2,
        },
        {
          name: `Silver Jeans`,
          SKU: '0231664667',
          price: '$69.00',
          inventory: 'In Stock',
          collectionId: 2,
        },
        {
          name: `Orange Stocks`,
          SKU: '0231664671',
          price: '$9.00',
          inventory: 'Out Of Stock',
          collectionId: 2,
          filterId: 1,
        },
        {
          name: `Black T-shirts`,
          SKU: '0231664672',
          price: '$19.00',
          inventory: 'In Stock',
          collectionId: 2,
          filterId: 1,
        },
      ];

    return [1, 2].reduce(
      (data, index) => data.concat(initBaseData(index)),
      [],
    );
  }

  _renderMainToolbar() {
    const filterOptions = [
      { id: 0, value: 'In Stock, Out Of Stock' },
      { id: 1, value: 'In Stock' },
      { id: 2, value: 'Out Of Stock' },
    ];

    return (
      <Card>
        <TableToolbar>
          <TableToolbar.ItemGroup position="start">
            <TableToolbar.Item>
              <TableToolbar.Label>
                Status
                <span style={{ width: '150px' }}>
                  <Dropdown
                    options={filterOptions}
                    selectedId={this.state.filterId}
                    onSelect={selectedOption => {
                      this.setState({ filterId: selectedOption.id });
                    }}
                    roundInput
                  />
                </span>
              </TableToolbar.Label>
            </TableToolbar.Item>
            <TableToolbar.Item>
              <TableToolbar.Label>
                Category
                <span style={{ width: '150px' }}>
                  <Dropdown
                    options={[{ id: 0, value: 'All categories' }]}
                    selectedId={0}
                    roundInput
                  />
                </span>
              </TableToolbar.Label>
            </TableToolbar.Item>
          </TableToolbar.ItemGroup>
          <TableToolbar.ItemGroup position="end">
            <TableToolbar.Item>{this._renderSearch(false)}</TableToolbar.Item>
          </TableToolbar.ItemGroup>
        </TableToolbar>
      </Card>
    );
  }

  _renderActionsToolbar({ selectedCount, getSelectedIds }) {
    return (
      <TableToolbar>
        <TableToolbar.ItemGroup position="start">
          <TableToolbar.Item>
            <TableToolbar.SelectedCount>{`${selectedCount} Selected`}</TableToolbar.SelectedCount>
          </TableToolbar.Item>
        </TableToolbar.ItemGroup>
        <TableToolbar.ItemGroup position="end">
          <TableToolbar.Item layout="button">
            <Button
              skin="light"
              priority="primary"
              prefixIcon={<Icons.Upload />}
              onClick={() =>
                window.alert(`Exporting selectedIds=${getSelectedIds()}`)
              }
            >
              Export
            </Button>
          </TableToolbar.Item>
          <TableToolbar.Item layout="button">
            <Button
              skin="light"
              priority="primary"
              prefixIcon={<Icons.Duplicate />}
              onClick={() =>
                window.alert(`Duplicating selectedIds=${getSelectedIds()}`)
              }
            >
              Duplicate
            </Button>
          </TableToolbar.Item>
          <TableToolbar.Item layout="button">
            <Button
              skin="light"
              priority="primary"
              prefixIcon={<Icons.Edit />}
              onClick={() =>
                window.alert(`Editing selectedIds=${getSelectedIds()}`)
              }
            >
              Edit
            </Button>
          </TableToolbar.Item>
          <TableToolbar.Divider />
          <TableToolbar.Item>{this._renderSearch(true)}</TableToolbar.Item>
        </TableToolbar.ItemGroup>
      </TableToolbar>
    );
  }

  _renderEmptyState = () => (
    <Table.EmptyState
      title="You haven't added any items yet"
      subtitle="Add items to your website so people can buy them"
      image={
        <Box
          height={120}
          width={120}
          backgroundColor="#dfe5eb"
          borderRadius="50%"
        />
      }
    >
      <TextButton suffixIcon={<Icons.ExternalLink />}>
        Learn how to add items
      </TextButton>
    </Table.EmptyState>
  );

  _clearSearch() {
    this.setState({
      collectionId: 0,
      filterId: 0,
      searchTerm: '',
      inStock: false,
    });
  }

  _renderSearch(expandable) {
    return (
      <Search
        expandable={expandable}
        onChange={e => {
          this.setState({ searchTerm: e.target.value });
        }}
        value={this.state.searchTerm}
      />
    );
  }

  _getFilteredData() {
    let data = this._simulateData();

    if (this.state.filterId > 0) {
      data = data.filter(row => row.filterId === this.state.filterId);
    }

    if (this.state.searchTerm !== '') {
      data = data.filter(row =>
        row.name.toUpperCase().includes(this.state.searchTerm.toUpperCase()),
      );
    }

    return data;
  }
}
