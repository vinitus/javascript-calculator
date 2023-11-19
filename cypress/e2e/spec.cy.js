const clickDigitButtons = (digits = []) => {
  digits.forEach((digit) => {
    cy.get('.digit').contains(digit).click();
  });
};

const clickOperationButtons = (operation) => {
  cy.get('.operation').contains(operation);
};

const checkDisplayValue = (value) => {
  cy.get('#total').should('have.text', value);
};

describe('계산기 앱 테스트', () => {
  beforeEach('페이지 방문', () => {
    cy.visit('../../index.html');
  });

  it('디스플레이에 기본적으로 숫자 0이 표시된다.', () => {
    // querySelector 역할
    checkDisplayValue('0');
  });

  // 계산기에서 요구되는 것은 결국 결과값이 표시되어야한다.
  // 그 중에서도 가장 작은 단위인 1개의 숫자가 표시되는가
  it('1개의 숫자 버튼을 클릭하면 display에 숫자가 표시된다', () => {
    // contains()는 해당 문자열이 포함된 여러 HTML 요소 중 하나를 선택함
    // click은 해당 HTML 태그를 클릭처리
    clickDigitButtons(['1']);
    checkDisplayValue('1');
  });

  // 1개의 클릭보단 큰 단위인 2개의 클릭
  it('2개의 숫자 버튼을 클릭하면 display에 숫자가 표시된다', () => {
    clickDigitButtons(['1', '2']);
    checkDisplayValue('12');
  });

  // unknown의 영역 -> 3개까지 잘 작동될까?
  it('3개의 숫자 버튼을 클릭하면 display에 숫자가 표시된다', () => {
    clickDigitButtons(['1', '2', '4']);
    checkDisplayValue('124');
  });

  xit('3개의 숫자 버튼을 누르고 연산자 버튼을 누르면 display에 연산자가 표시된다.', () => {
    clickDigitButtons(['1', '2', '4']);
    clickOperationButtons('*');
    checkDisplayValue('124*');
  });

  xit('연사자 버튼을 여려번 누르면 display에 마지막 연산자만 표시한다.', () => {
    clickDigitButtons(['1', '2', '4']);
    clickOperationButtons('*');
    clickOperationButtons('-');
    checkDisplayValue('124-');
  });

  xit('연사자 다음의 2번째 숫자를 입력하면 display에 2번째 숫자를 누적하여 표시한다.', () => {
    clickDigitButtons(['1', '2', '4']);
    clickOperationButtons('*');
    clickDigitButtons(['1', '2', '3']);
    checkDisplayValue('124*123');
  });
});
