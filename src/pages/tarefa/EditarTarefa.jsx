import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const EditarTarefa = ({ handleCloseEditar, idTarefaSelecionada, tarefas, tarefa, setTarefas }) => {
  const [tituloTarefa, setTituloTarefa] = useState('');
  const [descricaoTarefa, setDescricaoTarefa] = useState('');
  const [inicioTarefa, setInicioTarefa] = useState('');
  const [fimTarefa, setFimTarefa] = useState('');
  const [recursoTarefa, setRecursoTarefa] = useState('');
  const [statusTarefa, setStatusTarefa] = useState('');

  // Atualiza o estado dos campos com os dados da tarefa selecionada
  useEffect(() => {
    setTituloTarefa(tarefa.tituloTarefa);
    setDescricaoTarefa(tarefa.descricaoTarefa);
    setInicioTarefa(tarefa.inicioTarefa);
    setFimTarefa(tarefa.fimTarefa);
    setRecursoTarefa(tarefa.recursoTarefa);
    setStatusTarefa(tarefa.statusTarefa);
  }, [tarefa]);

  const handleSalvarEdicao = () => {
    const tarefasAtualizadas = tarefas.map(t => {
      if (t.idTarefa === idTarefaSelecionada) {
        return {
          ...t,
          tituloTarefa,
          descricaoTarefa,
          inicioTarefa,
          fimTarefa,
          recursoTarefa,
          statusTarefa
        };
      }
      return t;
    });
    setTarefas(tarefasAtualizadas);
    handleCloseEditar();
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardHeader
            title="Editar Tarefa"
          />
          <CardContent>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="titulo-tarefa">Título da Tarefa</InputLabel>
              <Input
                id="titulo-tarefa"
                value={tituloTarefa}
                onChange={(e) => setTituloTarefa(e.target.value)}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="descricao-tarefa">Descrição da Tarefa</InputLabel>
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
                  <InputLabel htmlFor="inicio-tarefa">Data de Início</InputLabel>
                  <Input
                    id="inicio-tarefa"
                    type="date"
                    value={inicioTarefa}
                    onChange={(e) => setInicioTarefa(e.target.value)}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth margin="normal">
                  <InputLabel htmlFor="fim-tarefa">Data de Término</InputLabel>
                  <Input
                    id="fim-tarefa"
                    type="date"
                    value={fimTarefa}
                    onChange={(e) => setFimTarefa(e.target.value)}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="recurso-tarefa">Recurso</InputLabel>
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
              <InputLabel htmlFor="status-tarefa">Status</InputLabel>
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
            <Button size="small" color="primary" onClick={handleSalvarEdicao}>Salvar</Button>
            <Button size="small" onClick={handleCloseEditar}>Cancelar</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default EditarTarefa;