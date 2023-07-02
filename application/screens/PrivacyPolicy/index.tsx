/* eslint-disable prettier/prettier */
import React from 'react';
import {StatusBar, StyleSheet, View, ScrollView, Text} from 'react-native';
import {userColorScheme} from '../../components/userColorScheme';
import BottomIcons from '../../components/bottomIcons';

interface Props {
    navigation: any;
}

const PrivacyPolicy = (props: Props): JSX.Element => {
    const { backgroundStyle, statusBarStyle } = userColorScheme();

    const handleButtonPress = () => {
        props.navigation.navigate('Home');
    };

    return (
      <View style={[styles.container, backgroundStyle]}>
        <StatusBar
          barStyle={statusBarStyle}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView>
          <View style={styles.textFiled}>
            <Text style={[styles.title1, {marginVertical: 10}]}>
              Política de Privacidade do App OnMusic
            </Text>
            <Text style={styles.title1}>Permissão de armazenamento</Text>
            <Text style={styles.section}>
              Usada para acessar o externo armazenado, inclusive a leitura e o
              acréscimo de quaisquer itens.
            </Text>
            <Text style={styles.title1}>Os direitos dos Usuários</Text>
            <Text style={styles.section}>
              É garantido aos usuários o direito de exercer controle sobre suas
              informações pessoais que são processadas pelo Proprietário. Isso
              implica na possibilidade de revogar o consentimento a qualquer
              momento. Além disso, eles possuem o direito de se opor ao
              processamento de seus dados caso exista uma base legal diferente
              do consentimento. Os usuários também têm o direito de acessar seus
              dados, obter informações detalhadas sobre como eles estão sendo
              processados e solicitar uma cópia dos dados em questão. É
              permitido que verifiquem a precisão de suas informações e
              solicitem correções, bem como restringir o processamento de seus
              dados em determinadas circunstâncias. Caso aplicável, os usuários
              têm o direito de requerer a exclusão de seus dados pessoais pelo
              Proprietário. Adicionalmente, eles têm o direito de receber seus
              dados em um formato estruturado e legível por máquinas, e, se
              tecnicamente viável, transferi-los para outro controlador sem
              enfrentar obstáculos. Esses direitos estão sujeitos ao
              processamento automatizado dos dados, baseado no consentimento do
              usuário, em um contrato no qual o usuário seja parte ou em
              obrigações pré-contratuais. Os usuários também possuem o direito
              de apresentar reclamações à autoridade competente de proteção de
              dados.
            </Text>
            <Text style={styles.title1}>
              Direito de discordar do processamento
            </Text>
            <Text style={styles.section}>
              Quando ocorre o processamento de dados pessoais para fins de
              interesse público, no exercício de uma autorização oficial
              concedida ao Proprietário ou para a busca de legítimos interesses
              do Proprietário, é assegurado aos usuários o direito de se opor a
              esse processamento, desde que apresentem um motivo relacionado à
              sua situação específica para justificar a objeção. No entanto, é
              importante ressaltar que, caso os dados pessoais sejam processados
              para fins de marketing direto, os usuários têm o direito de se
              opor a esse processamento a qualquer momento, sem a necessidade de
              fornecer justificativa. Para obter informações adicionais, os
              usuários podem consultar as principais fontes mencionadas neste
              documento.
            </Text>
            <Text style={styles.title2}>Como exercer estes direitos</Text>
            <Text style={styles.section}>
              Qualquer solicitação para exercer os direitos dos usuários pode
              ser encaminhada ao proprietário utilizando os dados fornecidos
              neste documento. Esses pedidos podem ser feitos sem qualquer custo
              e serão tratados pelo Proprietário o mais rapidamente possível, em
              todos os casos dentro de um prazo inferior a um mês.
            </Text>
            <Text style={styles.title2}>
              Informações adicionais sobre os Dados Pessoais do Usuário
            </Text>
            <Text style={styles.section}>
              Além das informações contidas nesta política de privacidade, este
              aplicativo pode fornecer ao usuário informações adicionais e
              contextuais sobre os serviços específicos ou a coleta e
              processamento de Dados Pessoais mediante solicitação.
            </Text>
            <Text style={styles.title1}>Cookies</Text>
            <Text style={styles.section}>
              Cookies são elementos de rastreamento constituídos por pequenas
              quantidades de informações armazenadas no navegador do usuário.
            </Text>
            <Text style={styles.title2}>Logs do sistema e manutenção</Text>
            <Text style={styles.section}>
              Para fins de operação e manutenção, este Aplicativo e quaisquer
              serviços de terceiros coletar arquivos que gravam uma interação
              com este Aplicativo (logs do sistema) ou usar outros Dados
              Pessoais (tais como endereço IP) para esta função.
            </Text>
            <Text style={styles.title2}>
              As informações não contidas nesta política
            </Text>
            <Text style={styles.section}>
              Mais detalhes sobre a coleta ou processamento de Dados Pessoais
              podem ser solicitados ao proprietário, a qualquer momento. Favor
              ver as informações de contato no início deste documento.
            </Text>
            <Text style={styles.title1}>
              Seus direitos de privacidade como brasileiro, como enviar uma
              solicitação e nossas respostas a suas solicitações
            </Text>

            <Text style={[styles.section, {paddingBottom: 30}]}>
              Seus direitos de privacidade como brasileiro Você tem o direito
              de: Obter confirmação sobre a existência de atividades de
              processamento de suas informações pessoais; acesso a suas
              informações pessoais; fazer com que suas informações pessoais
              incompletas, inexatas ou desatualizadas sejam corrigidas; obter o
              anonimato, bloqueio ou eliminação de suas informações pessoais
              desnecessárias ou em excesso, ou de informações que não sendo
              processadas de acordo com um LGPD; obter informações sobre a
              possibilidade de fornecer ou recusar sua anuência e as
              consequências; obter informações sobre os terceiros com quem
              compartilhamos suas informações pessoais; obter, mediante sua
              solicitação expressa, uma portabilidade de suas informações
              pessoais (exceto informações anônimas) para outro fornecedor de
              produtos ou serviços, desde que nossos segredos comerciais e
              industriais continuem protegidos; obter a exclusão de suas
              informações pessoais processadas, se o processamento teve base em
              sua anuência, a menos que se apliquem uma ou mais exceções
              daquelas dispostas no art. 16 da LGPD; retirar sua anuência a
              qualquer momento; registrar uma reclamação com relação a suas
              informações pessoais à ANPD (Autoridade Nacional de Proteção de
              Dados) ou órgãos de proteção ao consumidor; opor-se a uma
              atividade de processamento nos casos em que o processamento não
              for realizado em conformidade com as disposições da lei;
              informações claras e claras a respeito dos critérios e
              procedimentos usados ​​para uma decisão automatizada; e
              solicitando a revisão de decisões excluídas com base no
              processamento automatizado de suas informações pessoais, que
              afetem seus interesses. Nisto estão as decisões para definir seu
              perfil pessoal, profissional, de consumidor e de crédito ou
              aspectos de sua personalidade.
            </Text>
          </View>
        </ScrollView>
        <BottomIcons navigation={props.navigation} />
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000', // Add default black background color
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginVertical: 10,
    color: 'black',
  },
  textFiled: {
    marginTop: 30,
    width: '100%',
    minHeight: 100,
    top: 0,
    bottom: 0,
    borderTopRightRadius: 40,
    backgroundColor: 'black',
    padding: 20,
  },
  title1: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  title2: {
    fontWeight: 'bold',
  },
  section: {
    marginVertical: 20,
    textAlign: 'justify',
  },
  footerSpace: {
    fontSize: 20,
    color: 'black',
  },
});

export default PrivacyPolicy;
