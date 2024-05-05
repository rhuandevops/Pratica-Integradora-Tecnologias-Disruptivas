import React, { useState } from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const CriarTarefa = ({ handleClose, tarefas, setTarefas }) => {
  const [tituloTarefa, setTituloTarefa] = useState('');
  const [descricaoTarefa, setDescricaoTarefa] = useState('');
  const [inicioTarefa, setInicioTarefa] = useState('');
  const [fimTarefa, setFimTarefa] = useState('');
  const [recursoTarefa, setRecursoTarefa] = useState('');
  const [statusTarefa, setStatusTarefa] = useState('');

  const handleSalvar = () => {
    const novaTarefa = {
      idTarefa: Math.max(...tarefas.map(tarefa => tarefa.idTarefa)) + 1,
      tituloTarefa,
      descricaoTarefa,
      inicioTarefa,
      fimTarefa,
      recursoTarefa,
      statusTarefa
    };

    setTarefas([...tarefas, novaTarefa]);
    handleClose();
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={6}>
        <Card>
          <CardHeader
            title="Cadastro de Tarefa"
            subheader="Preencha os campos abaixo"
          />
          <CardContent>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="titulo-tarefa">Título da Tarefa *</InputLabel>
              <Input
                id="titulo-tarefa"
                value={tituloTarefa}
                onChange={(e) => setTituloTarefa(e.target.value)}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="descricao-tarefa">Descrição da Tarefa *</InputLabel>
              <Input
                id="descricao-tarefa"
                multiline
                rows={4}
                value={descricaoTarefa}
                onChange={(e) => setDescricaoTarefa(e.target.value)}
              />
            </FormControl>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControl fullWidth margin="normal">
                  <InputLabel htmlFor="inicio-tarefa"></InputLabel>
                  <Input
                    id="inicio-tarefa"
                    type="date"
                    value={inicioTarefa}
                    onChange={(e) => setInicioTarefa(e.target.value)}
                  />
                  <FormHelperText>Data de início da tarefa *</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth margin="normal">
                  <InputLabel htmlFor="fim-tarefa"></InputLabel>
                  <Input
                    id="fim-tarefa"
                    type="date"
                    value={fimTarefa}
                    onChange={(e) => setFimTarefa(e.target.value)}
                  />
                  <FormHelperText>Data de término da tarefa *</FormHelperText>
                </FormControl>
              </Grid>
            </Grid>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="recurso-tarefa">Recurso *</InputLabel>
              <Select
                id="recurso-tarefa"
                value={recursoTarefa}
                onChange={(e) => setRecursoTarefa(e.target.value)}
              >
                <MenuItem value={'Recurso 1'}>Recurso 1</MenuItem>
                <MenuItem value={'Recurso 2'}>Recurso 2</MenuItem>
                <MenuItem value={'Recurso 3'}>Recurso 3</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="status-tarefa">Status *</InputLabel>
              <Select
                id="status-tarefa"
                value={statusTarefa}
                onChange={(e) => setStatusTarefa(e.target.value)}
              >
                <MenuItem value={'Aguardando'}>Aguardando</MenuItem>
                <MenuItem value={'Em Andamento'}>Em Andamento</MenuItem>
                <MenuItem value={'Concluída'}>Concluída</MenuItem>
              </Select>
            </FormControl>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" onClick={handleSalvar}>Salvar</Button>
            <Button size="small" onClick={handleClose}>Cancelar</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CriarTarefa;
