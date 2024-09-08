export default {
    // Diretórios onde o Jest irá procurar arquivos de teste
    roots: ["<rootDir>/src"],

    // Transforma arquivos .jsx com o Babel antes de rodar os testes
    transform: {
        "^.+\\.jsx?$": "babel-jest",
    },

    // Extensões de arquivo que o Jest vai reconhecer
    moduleFileExtensions: ["js", "jsx", "json", "node"],

    // Ignora a transformação de arquivos em node_modules, exceto se necessário
    transformIgnorePatterns: ["/node_modules/"],

    // Mapear arquivos estáticos como imagens ou CSS que não são importantes para os testes
    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "identity-obj-proxy",
        "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
    },

    // Configurações para o ambiente de teste do React
    testEnvironment: "jsdom",

    // Cobertura de código (opcional)
    collectCoverage: true,
    collectCoverageFrom: [
        "src/**/*.{js,jsx}",
        "!src/index.jsx",
        "!src/**/*.stories.jsx",
    ],
    coverageDirectory: "coverage",
    setupFilesAfterEnv: ["<rootDir>/src/setupTest.js"],
};
