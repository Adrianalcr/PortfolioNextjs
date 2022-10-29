
import { Button } from '@mui/material';
import RenderResult from 'next/dist/server/render-result';
import React from 'react';
import { history } from 'umi';

export default function NotFund() {
  return (
    <div>
      <RenderResult
        status="404"
        title="Página não encontrada"
        subTitle="404 Not Fund"
        extra={
          <Button type="primary" onClick={() => history.go(-2)}>
            voltar para a última página
          </Button>
        }
      ></Result>
    </div>
  );
}