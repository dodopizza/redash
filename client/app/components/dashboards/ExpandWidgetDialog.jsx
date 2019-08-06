import React from 'react';
import PropTypes from 'prop-types';
import Button from 'antd/lib/button';
import Modal from 'antd/lib/modal';
import { VisualizationRenderer } from '@/visualizations/VisualizationRenderer';
import { wrap as wrapDialog, DialogPropType } from '@/components/DialogWrapper';
import { VisualizationName } from '@/visualizations/VisualizationName';

function ExpandWidgetDialog({ dialog, widget }) {
  return (
    <Modal
      {...dialog.props}
      title={(
        <React.Fragment>
          <VisualizationName visualization={widget.visualization} />
          <span>{widget.getQuery().name}</span>
        </React.Fragment>
      )}
      width={900}
      footer={(<Button onClick={dialog.dismiss}>Close</Button>)}
    >
      <VisualizationRenderer visualization={widget.visualization} queryResult={widget.getQueryResult()} />
    </Modal>
  );
}

ExpandWidgetDialog.propTypes = {
  dialog: DialogPropType.isRequired,
  widget: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default wrapDialog(ExpandWidgetDialog);