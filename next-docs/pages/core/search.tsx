import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import Default from '../../public/examples/search/Default';
import Modal from '../../public/examples/search/Modal';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('search');
  return (
    <>
      <ComponentPageDescription title="Search" isInProgress>
        <p>
          Search
        </p>
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Search Modal"
        preview={<Modal />}
        code={examples ? examples.Default : 'Loading'}
      />

      <PropsTable
        title="Search props"
        data={[
          {
            name: 'onChangeSearch',
            type: '(value: string) => void',
            required: true,
            default: '-',
            description:
              'Function for setting search value',
          },
          {
            name: 'onChangeOpen',
            type: '(value: boolean) => void',
            required: true,
            default: '_',
            description: 'Function for setting open state',
          },
          {
            name: 'children',
            type: 'React.ReactNode',
            required: true,
            default: '_',
            description: 'Children of command palette',
          },
          {
            name: 'isOpen',
            type: 'boolean',
            required: true,
            default: '_',
            description: 'Open state',
          },
          {
            name: 'search',
            type: 'string',
            required: true,
            default: '_',
            description: 'Search state',
          },
          {
            name: 'placeholder',
            type: 'string',
            required: false,
            default: '"Search"',
            description: 'Search field placeholder',
          },

          {
            name: 'page',
            type: 'string',
            required: false,
            default: '_',
            description: 'The current page id',
          },
          {
            name: '',
            type: '',
            required: false,
            default: '_',
            description: '',
          },
          {
            name: 'renderLink',
            type: 'RenderLink',
            required: false,
            default: '_',
            description: 'Function for customizing rendering of links',
          },
          {
            name: 'selected',
            type: 'number',
            required: false,
            default: '_',
            description: 'The current selected item index',
          },
          {
            name: 'onChangeSelected',
            type: '(value: number) => void',
            required: false,
            default: '_',
            description: 'Function for setting selected item index',
          },
          {
            name: '',
            type: '',
            required: false,
            default: '_',
            description: '',
          },
        ]}
      />
    </>
  );
};

export default Example;
